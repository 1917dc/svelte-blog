type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date:string, dateStyle: DateStyle = 'medium', locales = 'pt-br') {
    const dateToFormat = new Date(date.replaceAll('-', '/'))
    const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })

    return dateFormatter.format(dateToFormat)
}