function censorWord(str,word) {
    const regex = new RegExp(word, "gi");
    const censorText = str.replace(regex,'****');
    return censorText;
}

const originalPost = "JavaScript is fun, but sometimes javascript";
const cleanPost = censorWord(originalPost, "javascript");

console.log(cleanPost);