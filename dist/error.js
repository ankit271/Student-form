try {
    alertMessage('hiii')
} catch (error) {
    console.log(error.message);
    console.log(error.name);
}
finally{
    console.log('hiiiiiii')
}