const resp = get5000users();

//Define limit of the queue
const QUEUE_LIMIT = 1000;

const Q: string[] = [];

resp.forEach((email: string) => {
    Q.push(email);
})


//Once there is a push to the  queue, sendMail should start sending the mail
//If the queue is empty, do not send anything
//If the queue is full, you can't add to the queue