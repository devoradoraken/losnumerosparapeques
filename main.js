function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier
    ("https://storage.googleapis.com/tm-model/G209bw1Dk/model.json ", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Escucho -" + results[0].label;
        document.getElementById("result_confidence").innerHTML="Presición -" + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById('num1')
        img2=document.getElementById('num2')
        img3=document.getElementById('num3')
        img4=document.getElementById('num4')
        img5=document.getElementById('num5')
        img6=document.getElementById('num6')
        img7=document.getElementById('num7')
        img8=document.getElementById('num8')
        img9=document.getElementById('num9')
       
        




        if(results[0].label=="1"){
            img.src='gift1.gif';
            img2.src= 'num2.png';
            img3.src= 'num3.webp';
            img4.src= 'num4.png';
            img5.src= 'num5.png';
            img6.src= 'num6.png';
            img7.src= 'num7.jpg';
            img8.src= 'num8.webp';
            img9.src= 'num9.webp';
        }else if(results[0].label=="2"){
            img.src='num1.png';
            img2.src= 'gift2.gif';
            img3.src= 'num3.webp';
            img4.src= 'num4.png';
            img5.src= 'num5.png';
            img6.src= 'num6.png';
            img7.src= 'num7.jpg';
            img8.src= 'num8.webp';
            img9.src= 'num9.webp';

        }else if(results[0].label=="3"){
            img.src='num1.png';
            img2.src= 'num2.png';
            img3.src= 'gift3.gif';
            img4.src= 'num4.png';
            img5.src= 'num5.png';
            img6.src= 'num6.png';
            img7.src= 'num7.jpg';
            img8.src= 'num8.webp';
            img9.src= 'num9.webp';
       
        }else if(results[0].label=="4"){
            img.src='num1.png';
            img2.src= 'num2.png';
            img3.src= 'num3.webp';
            img4.src= 'gift4.gif';
            img5.src= 'num5.png';
            img6.src= 'num6.png';
            img7.src= 'num7.jpg';
            img8.src= 'num8.webp';
            img9.src= 'num9.webp';
           
        }else if(results[0].label=="5"){
            img.src='num1.png';
            img2.src= 'num2.png';
            img3.src= 'num3.webp';
            img4.src= 'num4.png';
            img5.src= 'gift5.gif';
            img6.src= 'num6.png';
            img7.src= 'num7.jpg';
            img8.src= 'num8.webp';
            img9.src= 'num9.webp';
        }else if(results[0].label=="6"){
            img.src='num1.png';
            img2.src= 'num2.png';
            img3.src= 'num3.webp';
            img4.src= 'num4.png';
            img5.src= 'num5.png';
            img6.src= 'gift6.gif';
            img7.src= 'num7.jpg';
            img8.src= 'num8.webp';
            img9.src= 'num9.webp';
           
        }else if(results[0].label=="7"){
            img.src='num1.png';
            img2.src= 'num2.png';
            img3.src= 'num3.webp';
            img4.src= 'num4.png';
            img5.src= 'num5.png';
            img6.src= 'num6.png';
            img7.src= 'gift7.gif';
            img8.src= 'num8.webp';
            img9.src= 'num9.webp';
        }else if(results[0].label=="8"){
            img.src='num1.png';
            img2.src= 'num2.png';
            img3.src= 'num3.webp';
            img4.src= 'num4.png';
            img5.src= 'num5.png';
            img6.src= 'num6.png';
            img7.src= 'num7.jpg';
            img8.src= 'gift8.gif';
            img9.src= 'num9.webp';
            
            

        }else if(results[0].label=="9"){
            img.src='num1.png';
            img2.src= 'num2.png';
            img3.src= 'num3.webp';
            img4.src= 'num4.png';
            img5.src= 'num5.png';
            img6.src= 'num6.png';
            img7.src= 'num7.jpg';
            img8.src= 'num8.webp';
            img9.src= 'gift9.gif';
            
            
        }


    }
    

}