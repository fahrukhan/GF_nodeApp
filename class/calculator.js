module.exports = function(x, y){
    this.x = x;
    this.y = y;

    this.getValue = function(){
        return "nilai x:"+this.x+" dan nilai y:"+this.y;
    }

    this.add = function(){
        return "dijumlahkan "+(this.x+this.y);
    }

    this.substract = function(){
        return "dikurang "+(this.x-this.y);
    }

    this.multiply = function(){
        return "dikali "+(this.x*this.y);
    }

    this.div = function(){
        return "dikali "+(this.x/this.y);
    }
}