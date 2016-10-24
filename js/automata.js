
function rule(num)
{
    this.ruleNum = num
    this.ruleSet = intToBinary(num)

    this.iterate = function(arr)
    {
        var newArr = [arr.length]
        newArr[0] = 0;
        newArr[arr.length - 1] = 0

        for (var i = 1; i < arr.length -1; i++)
        {
            var rule = binaryToInt([arr[i+1],arr[i], arr[i-1]])
            newArr[i] = this.ruleSet[rule]
        }

        return newArr
    }
}


//takes int 0-255 and converts returns 8 bit number as an array
//used to generate rule fro wolfram code
function intToBinary(num)
{
    var arr = [8]
    var n = num

    for (var i = 0; i < 8; i++)
    {
        arr[i] = num % 2
        num = Math.floor(num/2)
    }

    return arr
}

//takes 3 binary array and converts to int
function binaryToInt(arr)
{
    return arr[0] * 1 + arr[1] * 2 + arr[2] * 4
} 


