// user manual: cho người dùng nhập một dãy các số cách nhau bằng dấu phẩy và thực hiện lưu dãy số đó vào một mảng sau đó hiển thị lên span ở top__app để người dùng vẫn có thể quan sát khi thực hiện 10 chức năng tương ứng ở phía dưới

var submitButton = document.querySelector("#submit");

submitButton.onclick = function () {
    var input = document.getElementById("daySo").value.split(",");
    var output__arr = ""

    for (var i = 0; i < input.length; i++) {
        output__arr += input[i] + ","
    }

    newop__array = output__arr.slice(0, -1)

    document.querySelector("#arr__span").innerHTML = newop__array
}

// chức năng 1: tính tổng các số dương trong mảng:

var submitButton__1 = document.querySelector("#submit__1");

submitButton__1.onclick = function () {
    var input = document.getElementById("daySo").value.split(",");
    var sumPositives = 0;

    for (var i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            sumPositives += parseFloat(input[i])
        }
    }

    document.querySelector("#answer__1").innerHTML = sumPositives

}

// chức năng 2: Số các số dương trong mảng:

var submitButton__2 = document.querySelector("#submit__2");

submitButton__2.onclick = function () {
    var input = document.getElementById("daySo").value.split(",");
    var numPositives = 0;

    for (var i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            numPositives++
        }
    }

    document.querySelector("#answer__2").innerHTML = numPositives
}

// chức năng 3: Tìm số nhỏ nhất trong mảng

var submitButton__3 = document.querySelector("#submit__3");

submitButton__3.onclick = function () {
    var input = document.getElementById("daySo").value.split(",");
    var minnum = parseFloat(input[0]);

    for (var i = 1; i < input.length; i++) {
        if (input[i] < minnum) {
            minnum = input[i]
        }
    }

    document.querySelector("#answer__3").innerHTML = minnum
}

// chức năng 4: Tìm số dương nhỏ nhất trong mảng của bạn là:

var submitButton__4 = document.querySelector("#submit__4");

submitButton__4.onclick = function () {
    var input = document.getElementById("daySo").value.split(",");
    var arr__positives = [];


    for (var i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            arr__positives.push(input[i])
        }
    }

    var minnumPos = parseInt(arr__positives[0]);

    for (var i = 1; i < arr__positives.length; i++) {
        if (arr__positives[i] < minnumPos) {
            minnumPos = arr__positives[i]
        }
    }

    document.querySelector("#answer__4").innerHTML = minnumPos
}

// chức năng 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.:

var submitButton__5 = document.querySelector("#submit__5");

submitButton__5.onclick = function () {
    var input = document.getElementById("daySo").value.split(",");
    var numEven = []

    for (var i = 0; i < input.length; i++) {
        var num = parseInt(input[i]);

        if ((num !== 0) && ((num % 2) === 0)) {
            numEven = numEven.concat(num)
        }
    }

    if (numEven.length > 0) {
        document.querySelector("#answer__5").innerHTML = numEven[numEven.length - 1]
    }
    else {
        document.querySelector("#answer__5").innerHTML = "-1"
    }
}

// chức năng 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị):

var submitButton__6 = document.querySelector("#submit__6");

submitButton__6.onclick = function () {
    var input__1 = document.getElementById("daySo").value.split(",");
    var input__2 = document.getElementById("daySo__6").value.split(",");
    var input__temp = input__1;

    for (var i = 0; i < input__1.length; i++) {
        if (input__1[i] === input__2[0]) {
            input__1[i] = input__2[1];
            for (var a = 0; a < input__temp.length; a++) {
                if (input__temp[a] === input__2[1]) {
                    input__1[a] = input__2[0];
                    break;
                }
            }
            break;
        }
    }

    document.querySelector("#answer__6").innerHTML = input__1;
};

// chức năng 7: Sắp xếp mảng theo thứ tự tăng dần.:

var submitButton__7 = document.querySelector("#submit__7");

submitButton__7.onclick = function () {
    var input = document.getElementById("daySo").value.split(",");

    for (var i = 0; i < input.length - 1; i++) {
        for (var j = 0; j < input.length - i - 1; j++) {
            if (parseInt(input[j]) > parseInt(input[j + 1])) {
                var temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
            }
        }
    }

    document.querySelector("#answer__7").innerHTML = input;
};

// chức năng 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.:

var submitButton__8 = document.querySelector("#submit__8");

submitButton__8.onclick = function () {
    var input = document.getElementById("daySo").value.split(",");
    var array__Prime = [];

    for (var i = 0; i < input.length; i++) {
        var isPrime = true;

        for (var j = 2; j <= Math.sqrt(parseInt(input[i])); j++) {
            if (parseInt(input[i]) % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime && parseInt(input[i]) !== 1) {
            array__Prime = array__Prime.concat(input[i]);
            break;
        }
    }

    if (array__Prime.length > 0) {
        document.querySelector("#answer__8").innerHTML = array__Prime[0];
    } else {
        document.querySelector("#answer__8").innerHTML = "-1";
    }
};

// chức năng 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?

var submitButton__9 = document.querySelector("#submit__9");

submitButton__9.onclick = function () {
    var inputBase = document.getElementById("daySo").value.split(",");
    var input9 = document.getElementById("daySo__9").value.split(",");
    var input = inputBase.concat(input9);
    var numInt = 0;

    for (var i = 0; i < input.length; i++) {
        if (parseFloat(input[i]) % 1 === 0) {
            numInt++;
        }
    }

    document.querySelector("#answer__9").innerHTML = numInt;
}

// chức năng 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.

var submitButton__10 = document.querySelector("#submit__10");

submitButton__10.onclick = function () {
    var input = document.getElementById("daySo").value.split(",");
    var numPos = 0;
    var numNeg = 0;

    for (var i = 0; i < input.length; i++) {
        if (parseFloat(input[i]) > 0) {
            numPos++;
        }
        else if (parseFloat(input[i]) < 0) {
            numNeg++;
        }
    }

    if (numPos > numNeg) {
        document.querySelector("#answer__10").innerHTML = "số dương";
    }
    else if (numPos < numNeg) {
        document.querySelector("#answer__10").innerHTML = "số âm";
    }
    else{
        document.querySelector("#answer__10").innerHTML = "không có loại số nào có số lượng lớn hơn";
    }
}