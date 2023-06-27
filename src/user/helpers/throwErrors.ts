import { HttpException, HttpStatus } from "@nestjs/common";

export function throwErrors(errors: string[]) {
  if(HttpStatus.NOT_FOUND) {
    throw new HttpException(errors[0], 404)
  }
  else if(HttpStatus.BAD_REQUEST) {
    throw new HttpException(errors[1], 500)
  }
  else {
    throw new HttpException(errors[2], 500)
  }
}