const dateFormatter = Intl.DateTimeFormat('pt-br',{
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
})

const priceFormatter = Intl.NumberFormat('pt-br',{
    style: 'currency',
    currency: 'BRL'
})