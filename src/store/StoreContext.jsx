import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { allProducts } from '../data/catalog.js'

const StoreContext = createContext(null)

const STORAGE_KEY = 'maison-lumiere-store-v1'

const initialState = {
  cart: [],
  wishlist: [],
  toasts: [],
  ui: { cart: false, search: false, menu: false, account: false, quickView: null },
}

function loadPersisted() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return {
      cart: Array.isArray(parsed.cart)
        ? parsed.cart.filter((l) => allProducts.some((p) => p.id === l.id))
        : [],
      wishlist: Array.isArray(parsed.wishlist)
        ? parsed.wishlist.filter((id) => allProducts.some((p) => p.id === id))
        : [],
    }
  } catch {
    return {}
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'add-to-cart': {
      const { id, qty, metal, size } = action.payload
      const key = `${id}|${metal || ''}|${size || ''}`
      const existing = state.cart.find((line) => line.key === key)
      const cart = existing
        ? state.cart.map((line) =>
            line.key === key ? { ...line, qty: Math.min(line.qty + qty, 9) } : line
          )
        : [...state.cart, { key, id, qty, metal, size }]
      return { ...state, cart }
    }
    case 'update-qty': {
      const cart = state.cart
        .map((line) => (line.key === action.key ? { ...line, qty: action.qty } : line))
        .filter((line) => line.qty > 0)
      return { ...state, cart }
    }
    case 'remove-line':
      return { ...state, cart: state.cart.filter((line) => line.key !== action.key) }
    case 'clear-cart':
      return { ...state, cart: [] }
    case 'toggle-wishlist': {
      const has = state.wishlist.includes(action.id)
      return {
        ...state,
        wishlist: has ? state.wishlist.filter((id) => id !== action.id) : [...state.wishlist, action.id],
      }
    }
    case 'toast':
      return { ...state, toasts: [...state.toasts, action.toast] }
    case 'dismiss-toast':
      return { ...state, toasts: state.toasts.filter((t) => t.id !== action.id) }
    case 'ui':
      return { ...state, ui: { ...state.ui, ...action.payload } }
    case 'close-overlays':
      return { ...state, ui: { ...state.ui, cart: false, search: false, menu: false, account: false, quickView: null } }
    default:
      return state
  }
}

let toastSeq = 0

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => ({ ...init, ...loadPersisted() }))

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ cart: state.cart, wishlist: state.wishlist })
      )
    } catch {
      /* storage may be unavailable in private mode */
    }
  }, [state.cart, state.wishlist])

  const value = useMemo(() => {
    const cartCount = state.cart.reduce((sum, line) => sum + line.qty, 0)
    const subtotal = state.cart.reduce((sum, line) => {
      const product = allProducts.find((p) => p.id === line.id)
      return sum + (product ? product.price * line.qty : 0)
    }, 0)

    const notify = (message, tone = 'default') => {
      const id = ++toastSeq
      dispatch({ type: 'toast', toast: { id, message, tone } })
      setTimeout(() => dispatch({ type: 'dismiss-toast', id }), 3200)
    }

    return {
      cart: state.cart,
      wishlist: state.wishlist,
      cartCount,
      subtotal,
      ui: state.ui,
      toasts: state.toasts,
      addToCart: (product, options = {}) => {
        const qty = options.qty || 1
        dispatch({
          type: 'add-to-cart',
          payload: {
            id: product.id,
            qty,
            metal: options.metal || product.metal,
            size: options.size || (product.sizes ? product.sizes[0] : ''),
          },
        })
        notify(`${product.name} added to your bag`, 'success')
      },
      updateQty: (key, qty) => dispatch({ type: 'update-qty', key, qty }),
      removeLine: (key) => dispatch({ type: 'remove-line', key }),
      clearCart: () => dispatch({ type: 'clear-cart' }),
      toggleWishlist: (product) => {
        const already = state.wishlist.includes(product.id)
        dispatch({ type: 'toggle-wishlist', id: product.id })
        notify(already ? `${product.name} removed from wishlist` : `${product.name} saved to wishlist`)
      },
      isWishlisted: (id) => state.wishlist.includes(id),
      notify,
      dismissToast: (id) => dispatch({ type: 'dismiss-toast', id }),
      openCart: () => dispatch({ type: 'ui', payload: { cart: true } }),
      openSearch: () => dispatch({ type: 'ui', payload: { search: true } }),
      openMenu: () => dispatch({ type: 'ui', payload: { menu: true } }),
      openAccount: () => dispatch({ type: 'ui', payload: { account: true } }),
      openQuickView: (id) => dispatch({ type: 'ui', payload: { quickView: id } }),
      closeUi: (key) => dispatch({ type: 'ui', payload: { [key]: key === 'quickView' ? null : false } }),
      closeAll: () => dispatch({ type: 'close-overlays' }),
    }
  }, [state])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
