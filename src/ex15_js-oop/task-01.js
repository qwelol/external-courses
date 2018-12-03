(function(){
  'use strict';
  function BaseCandy(weight)
  {
    this.weight = weight;
  }
  function Candy(name, weight)
  {
    this.name = name.toLowerCase();
    BaseCandy.call(this, weight);
  }
  Candy.prototype = Object.create(BaseCandy.prototype);
  Candy.prototype.constructor = Candy;
  function CandyWithFilling(name, weight, filling)
  {
    Candy.call(this, name, weight);
    this.filling = filling;
  }
  CandyWithFilling.prototype = Object.create(Candy.prototype);
  CandyWithFilling.prototype.constructor = CandyWithFilling;
  var cand1 = new CandyWithFilling('Аленка', 200, 'Апельсин');
  var cand2 = new Candy ('Барбарис', 100);
  var cand3= new Candy ('Дюшес', 500);
  function Gift(recipient)
  {
    this.recipient = recipient;
    this.weight = 0;
    this.candys = [];
  }
  Gift.prototype.addCandy = function(candy)
  {
    this.candys.push(candy);
    this.weight+=candy.weight;
    return this;
  };
  Gift.prototype.sort = function(param)
  {
    if(param.toLowerCase() === 'weight')
    {
      this.candys.sort( 
      function (a,b)
      {
        return a.weight - b.weight;
      });
    }
    if (param.toLowerCase() === 'name')
    {
      this.candys.sort(
      function (a,b)
      {
        if (a.name < b.name)
        {
          return -1;
        }
        if (a.name > b.name)
        {
          return 1;
        }
        return 0;
      });
    }
  };
  Gift.prototype.searchCandy = function(title)
  {
    var titleLow = title.toLowerCase();
    var result = [];
    for (var i=0; i<this.candys.length; i++)
    {
      if (this.candys[i].name === titleLow)
      {
        result.push(this.candys[i]);
      }
    }
    console.log('В подарке для '+ this.recipient + ' количество конфет с именем '+ titleLow + ': '+result.length);
    return result;
  };
  var gift = new Gift('John Smith');
  gift.addCandy(cand3).addCandy(cand1).addCandy(cand2);
  gift.searchCandy('Аленка');
  gift.sort('weight');
}());