using System;
namespace XMLProcessingExperiments.Models
{
    public enum PropertyType
    {
		RealEstate,
		Vehicle,
		Valuable,
		Intellectual,
		Patent
    }
    public class Property : Asset
	{
		public PropertyType propertyType { get; set; }

		public Property() : base()
		{
		}
	}
}

