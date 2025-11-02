using System.Data;

namespace DMV.Domain;

public class Person
{
    public int id { set; get; }
    public string national_no { set; get; } = string.Empty;
    public string first_name { set; get; } = string.Empty;
    public string second_name { set; get; } = string.Empty;
    public string third_name { set; get; } = string.Empty;
    public string last_name { set; get; } = string.Empty;   
    public char gender{ set; get; }
    public DateTime date_of_birth{ set; get; }
    public string phone { set; get; } = string.Empty;
    public string email { set; get; } = string.Empty;
    
}
