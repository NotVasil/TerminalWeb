files = {
    "info.txt": "Hello there! I'm Luna and i love programming if you want to see my projects here is my <a href='https://github.com/NotVasil'>Github</a>"
}
$('#crt').terminal({
    ls: function() {
        s_return = ""
        for (file of Object.keys(files)) {
            s_return += file + "\n"
        }
        this.echo(s_return)
    },
    cat: function(file) {
        s_return = files[file]
        if(s_return) {
            this.echo(s_return, {raw:true})
        } else {
            this.echo(`'${file}' wasn't found!`)
        }
    }
}, {
    greetings: "Welcome! Use 'ls' to see files and 'cat' to read them."
});
