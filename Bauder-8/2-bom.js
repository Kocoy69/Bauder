// BEGIN
function solution(url) {
    const [browserName] = [...navigator.userAgent.split(' ')];
    return browserName + ' ' + url;
}

export default solution;
// END