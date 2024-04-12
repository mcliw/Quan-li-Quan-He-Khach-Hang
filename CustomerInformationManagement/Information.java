package CustomerInformationManagement;
import java.util.Scanner;


public class Information {
    private String Name;
    private int Age;
    private String Address;
    private int NumberPhone;
    private String Email;
    
    public void Customer() {
        System.out.println(Name + " : " + Age);
        System.out.println(Address);
        System.out.println(NumberPhone);
        System.out.println(Email);
    }

    public void Input() {
        System.out.println("hãy nhập tên của bạn :");
        try (Scanner sc = new Scanner(System.in)) {
            Name = sc.nextLine();
        }
        System.out.println(" ten cua ban la : " + Name);
    }

    public Information( String HoTen, int Tuoi) {
        this.Name = HoTen;
        this.Age = Tuoi;

    }
    public Information(){
        Name = "noNAme";
        Age = 0;
        Address = "NoAdDreSS";
        NumberPhone = 0000000000;
        Email = "No@EmAiL.com";
    }
}