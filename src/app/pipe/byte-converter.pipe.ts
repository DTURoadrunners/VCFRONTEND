import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byteConverter'
})
export class ByteConverterPipe implements PipeTransform {
  /**
   * Converts a number of bytes into byte units (B, KB, MB, GB and TB)
   * @param value the number of bytes to be converted
   */
  transform(bytes: number): string {
    if (!bytes)
      return null;
    if (bytes >= 1024){
      bytes /= 1024;
      if (bytes >= 1024){
        bytes /= 1024;
        if (bytes >= 1024) {
          bytes /= 1024;
          if (bytes >= 1024) {
            bytes /= 1024;
            if (bytes >= 1024) {
              return Math.ceil(bytes) + "TB"
            }
          }
          else {
            return Math.ceil(bytes) + "GB"
          }
        }
        else {
          return Math.ceil(bytes) + "MB"
        }
      }
      else {
        return Math.ceil(bytes) + "KB"
      }
    }
    else {
      return Math.ceil(bytes) + "B"
    }
  }

}
