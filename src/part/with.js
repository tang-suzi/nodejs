var req = {
    session: {
        user: {
            name: 'tom',
            sex: 'man'
        }
    }
};
req.session.user.name;
req.session.user.sex;

with(req.session.user) {
    console.log('name', name, 'sex:', sex)
}