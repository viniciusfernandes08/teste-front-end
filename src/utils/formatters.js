export const formatDate = (oldDate) => {
    const date = new Date(oldDate);
    const day = String(date.getDate()).padStart(2,'0');
    const month = String(date.getMonth()).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export const formatPhone = (olPhone) => {
    return olPhone.replace(/^(\d{1,3})(\d{2})(\d{5})(\d{4})$/, '+$1 ($2) $3-$4')
}