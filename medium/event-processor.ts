/**
 * Implement an event processor that ensures each event is processed only once.
 * The processor should be able to handle a high volume of events and should
 * efficiently determine if an event has already been processed.
 */
type MyEvent = {
    id: string;        // globally unique event id
    type: string;      // e.g. "USER_CREATED", "PAYMENT_SUCCESS"
    payload: unknown;
    timestamp: number;
};



const TTL = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

class EventProcessor {
    private processedEvents: Map<string, number> = new Map();

    process(event: MyEvent): boolean {
        let existingTimestamp = this.processedEvents.get(event.id);
        if (existingTimestamp !== undefined) {
            // Event already processed
            return false;
        }

        // Mark event as processed
        this.processedEvents.set(event.id, event.timestamp);
        return true;
    }
    cleanupOldEvents(): void {
      const now = Date.now();

      for (const [eventId, timestamp] of this.processedEvents.entries()) {
        if (now - timestamp > TTL) {
          this.processedEvents.delete(eventId);
        }
      }
  }

}
