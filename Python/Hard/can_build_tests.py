import unittest
from can_build import can_build1

class CanBuildTests(unittest.TestCase):
    '''first test'''
    def test_can_build1(self):
        self.assertEqual(can_build1("","go go go 2 today"),True)

    def test_can_build1_False(self):
        self.assertEqual(can_build1("doll","go go go 2 today"),False)

if __name__=="__main__":
    unittest.main()
