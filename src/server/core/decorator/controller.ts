import "reflect-metadata"

export default function Controller(path: string): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata("path", path, target);
  }
}