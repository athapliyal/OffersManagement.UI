import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

export const formatDate = (date: string) => {
    return format(parseISO(date), 'dd MMMM yyyy, hh:mm aa');
}