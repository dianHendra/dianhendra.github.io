// slide galeri lukisan 

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

// login home
function namaPassword(nama, password){
	if(nama == "admin" && password == "dian"){
		window.location.assign('index.html');
		alert("wellcome to Jelekong");
	} else{
		alert("coba lagi")
	}

}

//index gallery view more
function viewMOre(){
	alert('click view more button')
}

function pesan(){
	alert ('pesanan akan segera di proses')
	window.location.assign('gallery.html');
}
