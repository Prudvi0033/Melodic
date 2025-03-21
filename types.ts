import Stripe from 'stripe'

export interface userDetails{
    id : string
    first_name : string
    last_name : string
    full_name ?: string
    avatar_url ?: string
    billing_address ?: Stripe.Address
    payment_method ?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type]
}

export interface Product{
    id : string
    active ?: string
    name ?: string
    description ?: string
    image ?: string
    metadata ?: Stripe.Metadata
}

export interface Price{
    id : string
    product_id ?: string
    active ?: boolean
    description ?: string
    unit_amount ?: number
    current ?: string
    type ?: Stripe.Price.Type
    interval ?: Stripe.Price.Recurring.Interval
    interval_count ?: number
    trial_period_counts ?: number
    metadata ?: Stripe.Metadata
    products ?: Product
}

export interface Subscription{
    id : string
    user_id : string
    status ?: Stripe.Subscription.Status
    metadata ?: Stripe.Metadata
    price_id ?: string
    quantity ?: string
    cancel_at_period_end ?: boolean
    created : string
    current_period_start : string
    current_period_end : string
    ended_at ?: string 
    cancel_at ?: string
    canceld_at ?: string
    trail_start ?: string
    trail_end ?: string
    prices ?: Price
}