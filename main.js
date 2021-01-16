var images = ["download.jpg", "dad.jpg", "mom.jpg", "sister.jpg", "me.jpg"];
var names = ["Family Book", "Dr. Vinayak Bhor", "Dr. Pallavi Bhor", "Shanvika Bhor", "Sharvil Bhor"];

var i = 0;

function update() 
{
    i++;
    var numbers_of_family_member_in_array = 4
    if (i > numbers_of_family_member_in_array) 
    {
        i = 0;
    }

    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}