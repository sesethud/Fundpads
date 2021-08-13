function cardnumber(inputtxt)
             {
               var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
               if(inputtxt.value.match(cardno) )
                     {
                   alert("Payment sent. Please await a confirmation");
                   return true;
                     }
                   else
                     {
                     alert("Not a valid Visa/Amex.MasterCard credit card number!");
                     return false;
                     }
             }
