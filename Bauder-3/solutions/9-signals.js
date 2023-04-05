const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
];

// BEGIN
export const getFreeDomainsCount = (emails) => {
    const domains = emails
        .map(email => email.split('@')[1])
        .filter(domain => freeEmailDomains.includes(domain))
        .reduce((oldValue, domain) => {
            oldValue[domain] = (oldValue[domain] || 0) + 1;
            return oldValue;
        }, {});
    return domains;
};

export default getFreeDomainsCount;
// END