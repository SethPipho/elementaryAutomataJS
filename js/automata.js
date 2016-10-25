
function Rule(num)
{
    this.ruleNum = num
    this.ruleSet = intToBinary(num)

    this.iterate = function(arr)
    {
        var newArr = [arr.length]
        newArr[0] = 0;
        newArr[arr.length - 1] = 0

        for (var i = 0; i < arr.length; i++)
        {
            var left = i-1
            var right = i+1
            if(left < 0) {left = arr.length - 1}
            if(right > arr.length - 1) {right = 0}
            
            var rule = binaryToInt([arr[right],arr[i], arr[left]])
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


