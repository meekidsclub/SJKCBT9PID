/**
* makecode PID package for microbit.
* From students to learn PID concept.
* http://www.meekids.club
*/

/**
 * Custom blocks
 */
//% weight=20 color=#0fbc10

namespace Mee_PID {

    let Kp = 1
    let Ki = 0.1
    let Kd = 0.01
    let integral = 0
    let previousError = 0
    let error = 0
    let derivative = 0

    /**
    * Setting PID value, suggest init value (1, 0.1, 0.01), Kp is proportional, Ki is integral, Kd is derivative
    */
    //% block="setPID Kp$proportional Ki$integralConstant Kd$derivative"
    //% weight=90
    export function setPIDConstants(proportional: number, integralConstant: number, derivative: number): void {
        Kp = proportional
        Ki = integralConstant
        Kd = derivative
    }

    //% block="resetPID"
    //% weight=80
    export function resetPID(): void {
        integral = 0
        previousError = 0
    }

    //% block="computePID setPoint$setPoint measureValue$measuredValue"
    //% weight=85
    export function computePID(setPoint: number, measuredValue: number): number {
        error = setPoint - measuredValue
        integral += error
        derivative = error - previousError
        return Kp * error + Ki * integral + Kd * derivative
        previousError = error
    }

}

