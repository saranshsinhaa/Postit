declare namespace Express {
    interface Request {
        mode?: {
            event_id: string
            id: string
            mode: string
            user: string
        }
    }
}
