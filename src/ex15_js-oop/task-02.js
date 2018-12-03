(function(){
	'use strict';
	class Device
	{
		constructor (name, power)
		{
			this.name = name.toLowerCase();
			this.power = power;
			this.powerSupply=false;
		}
		powerOn()
		{
			this.powerSupply = true;
		}
		powerOff()
		{
			this.powerSupply = false;
		}
	}
	var fridge = new Device('fridge', 400);
	var microwave = new Device('microwave', 800);
	var kettle = new Device('kettle', 600); 
	class Room
	{
		constructor(name)
		{
			this.name = name.toLowerCase();
			this.devices = [];
		}
		addDevice(device)
		{
			this.devices.push(device);
			return this;
		}
		countPower()
		{
			var count=0;
			for(var i=0; i< this.devices.length; i++)
			{
				if (this.devices[i].powerSupply)
				{
					count+=this.devices[i].power;
				}
			}
			console.log('Потребляемая мощность устройств в комнате:'+count);
			return count;
		}
		searchDevice(title)
		{
			var titleLow = title.toLowerCase();
			var result = [];
			for (var i=0; i<this.devices.length; i++)
			{
				if (this.devices[i].name === titleLow)
				{
					result.push(this.devices[i]);
				}
			}
			console.log('В комнате '+ this.name + ' количество приборов с именем '+ titleLow + ': '+result.length);
			return result;
		}
	}
	var kitchen = new Room('kitchen');
	kitchen.addDevice(fridge).addDevice(microwave).addDevice(kettle);
	kettle.powerOn();
	fridge.powerOn();
	kitchen.countPower();
	kettle.powerOff();
	microwave.powerOn();
	kitchen.countPower();
	kitchen.searchDevice('kettle');
}());