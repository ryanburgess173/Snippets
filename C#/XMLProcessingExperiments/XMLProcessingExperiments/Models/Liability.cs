using System;
namespace XMLProcessingExperiments.Models
{
	public class Liability
	{
		public int LiabilityID { get; set; }
		public string LiabilityName { get; set; }
		public string LiabilityDescription { get; set; }
		public double LiabilityAmount { get; set; }
		public double LiabilityInterestRate { get; set; }
		public DateTime LiabilityEndDate { get; set; }
		public Liability()
		{
		}
	}
}

