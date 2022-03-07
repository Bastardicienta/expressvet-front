export class Appointmenty {
    constructor(
        public senderName: string,
        public senderDni: string,
        public petName: string,
        public dateRequest: Date,
        public idRequest: string,
        public typeRequest: string,
        public description: string,
        public statusRequest: string
    ){}
}
