let taskIdCounter = 0;

export default function generateTaskID() {
  return ++taskIdCounter;
}
