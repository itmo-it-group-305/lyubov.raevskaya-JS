/**
 * Created by Lyubov on 21.12.2015.
 */
/*function Storage() {
    this.store=[];
}
Storage.prototype.set = function (name, value) {
    this.store[name] = value
};
Storage.prototype.get = function (name) {
    return this.store[name]
};
//добавляем в прототип новый метод (удаление - установка переменной this.store = 0)
Storage.prototype.del = function(){
    this.store = []
};
//вызвать метод:
//db.del();
//можем напрямую адресоваться к массиву:
db.store;*/


function Storage () {
    store=[];
    function construct () {
        this.set = function (name, value) {
            store[name] = value
        };
        this.get = function (name) {
            return this.store[name]
        };
    }
    return new construct();
}

var obj = new Storage();
obj.set ('name','Peter');
//obj.store;



