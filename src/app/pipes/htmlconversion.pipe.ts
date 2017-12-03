import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'htmlConvertion'})
export class htmlConvertionPipe implements PipeTransform {
  
  constructor(private sanitizer:  DomSanitizer){}
  
  transform(html){
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}