export class data
{
    private Email:string;
    private Password:string;

    constructor(Email:string,Password:string)
    {
       this.Email=Email;
    this.Password=Password; 
   }
   getEmail():string
   {
         return this.Email;
   }
   getPassword():string
   {
    return this.Password;
   }
}