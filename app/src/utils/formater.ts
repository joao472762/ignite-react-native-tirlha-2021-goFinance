export const dateFormatter = Intl.DateTimeFormat('pt-br',{
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
})

export const priceFormatter = Intl.NumberFormat('pt-br',{
    style: 'currency',
    currency: 'BRL'
})

export const dateFormatterWithoutYear = Intl.DateTimeFormat('pt-br',{
    day:'2-digit',
    month:'long'
})