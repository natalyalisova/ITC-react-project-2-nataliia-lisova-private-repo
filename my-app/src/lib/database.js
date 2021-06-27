


let serverURL = "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/";

export function addTweet(data) {
    return fetch(serverURL + "/tweet", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
}


export function getTweets() {
    return fetch(serverURL + "/tweet", {
        method: "GET"});
}
