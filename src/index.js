module.exports =
    function solve(matrix) {
        let x = true;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (matrix[i][j] == 0) {
                    for (let k = 1; k < 10; k++) {
                        if (checkLines(matrix, i, j, k) && checkSquere(matrix, i, j, k)) {
                            matrix[i][j] = k;
                            if (solve(matrix))
                                return matrix;
                            matrix[i][j] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

function checkLines(matrix, i, j, k) {
    for (let a = 0; a < 3; a++) {
        for (let b = 0; b < 3; b++)
            if (a != i && b != j && matrix[(Math.floor((i / 3)) * 3) + a][(Math.floor((j / 3)) * 3) + b] == k)
                return false;
    }
    return true;
}

function checkSquere(matrix, i, j, k) {
    for (let a = 0; a < 9; a++) {
        if ((a != i && matrix[a][j] == k) || (a != j && matrix[i][a] == k))
            return false;
    }
        return true;
}