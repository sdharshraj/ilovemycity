exports.home = function(req,res){
    res.render('home',{
        title: 'IloveMyCity',
        headLine: 'Every city has something incredible.'
    });
}

exports.city = function(req,res){
    
    var cityName = req.params.city;
    var title,headLine;
    var images = [1,2,3,4];

    if(cityName === 'delhi'){
        title = 'New Delhi';
        headLine = 'New Delhi is the capital of India.';
        images.push(5);
        images.push(6);
    }
    else if(cityName === 'mumbai'){
        title = 'Mumbai';
        headLine = 'It is the dream city of every youngsters.';
    }
    else if(cityName === 'banglore'){
        title = 'Banglore';
        headLine = 'This city is silicon valley of India';
    }
    else if(cityName === 'goa'){
        title = 'Goa';
        headLine = 'City of best beaches';
    }

    res.render('city',{
        title : title,
        headLine : headLine,
        city : cityName,
        images : images
    });

}