type Callback = (data: any) => void;

class PubSub {
  private subscribers: Map<string, Callback[]> = new Map();

  publish(event: string, data: any) {
    const subscribers = this.subscribers.get(event);
    if (subscribers) {
      subscribers.forEach(callback => callback(data));
    }
  }

  subscribe(event: string, callback: Callback) {
    if (!this.subscribers.has(event)) {
      this.subscribers.set(event, []);
    }
    this.subscribers.get(event)?.push(callback);
  }

  unsubscribe(event: string, callback: Callback) {
    const subscribers = this.subscribers.get(event);
    if (subscribers) {
      this.subscribers.set(event, subscribers.filter(sub => sub !== callback));
    }
  }
}

const pubSub = new PubSub();
export default pubSub;
