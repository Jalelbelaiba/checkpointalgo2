function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
      var currentValue = arr[i]
      var j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  }
  console.log(insertionSort([20, 11, 3, 7, 50]))
  