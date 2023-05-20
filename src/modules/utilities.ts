const createRandomNumber = () => Math.random();

const sumNumbers = (a, b) => a + b;


const getCookie = (name: string): string => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : null;
}

export { createRandomNumber, sumNumbers, getCookie };