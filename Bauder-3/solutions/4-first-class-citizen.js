export const run = (text) => {
    // BEGIN
    const takeLast = (msg, last_letters) => {
        if (msg.length < last_letters) {
            return null;
        }
        msg = msg.slice(msg.length - last_letters);
        let reversed_msg = "";
        for (let i = last_letters - 1; i >= 0; i--) {
            reversed_msg += msg[i];
        }
        return reversed_msg;
    };
    // END

    return takeLast(text, 4);
};

export default run;