export class UpdateEstatus {
    orderId: string;
    orderStatus: number;
    observation: string;
    constructor(orderId: string, orderStatus: number, observation: string) {
        this.orderId = orderId;
        this.orderStatus = orderStatus;
        this.observation = observation;
    }
}
