let person = {
    name:"xiaoyi",
    getGreeting() {
        console.log(this.name+"hello");
    }
};

let friend = {
    name:"lisiyu",
    getGreeting() {
        Object.getPrototypeOf(this).getGreeting();
    }
};

Object.setPrototypeOf(friend, person);
friend.getGreeting();