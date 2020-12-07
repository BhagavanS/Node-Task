const givenString1 = `id,user
a,Bryan
b,Maya
c,Nupur
d,Jeffrey
e,Nicko`;
const givenString2 = `id,accessLevel
a,1
b,2
c,1
d,2
e,1`;
function getAccessLevel(string1, string2, accessLevel){
    string1 = (string1.split('\n').slice(1));
    string2 = string2.split('\n').slice(1);
    var str='';
    string1.forEach(function(ele,i) {
        const rows= string1[i].split(',');
        const rows2= string2[i].split(',');  
        if(rows2[1]==accessLevel){
            str+=rows[1]+',\n';
            str+=rows2[1]+',\n';
        }      
        
    });
    return str;
}
console.log(getAccessLevel(givenString1,givenString2,'1'));
    