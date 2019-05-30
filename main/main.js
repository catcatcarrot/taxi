module.exports = function main(inputs) {
    // write your code here...
    if (inputs.distance <= 2)
                total = 6 + 0.25 * inputs.parkTime
            else if (inputs.distance > 2 && inputs.distance <= 8)
                total = 6 + (inputs.distance - 2) * 0.8 + inputs.parkTime * 0.25
            else
                total = 6 + 6 * 0.8 + (inputs.distance - 8) * 1.2 + inputs.parkTime * 0.25
            return Math.round(total)
};
