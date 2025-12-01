function throwError(message: string): never {
    throw new Error(message);
}

console.log(throwError("never ever ever ever"));