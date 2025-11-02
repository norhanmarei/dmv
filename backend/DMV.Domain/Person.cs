using System.Data;

namespace DMV.Domain;

public class Person
{
    public int Id { set; get; }
    public string NationalNo { set; get; } = string.Empty;
    public string firstName { set; get; } = string.Empty;
    public string secondName { set; get; } = string.Empty;
    public string thirdName { set; get; } = string.Empty;
    public string lastName { set; get; } = string.Empty;   
    public char gender{ set; get; }
    public DateTime dateOfBirth{ set; get; }
    public string phone { set; get; } = string.Empty;
    public string email { set; get; } = string.Empty;
    
}
